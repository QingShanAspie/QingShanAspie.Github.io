# Work With Python2
import os
import stat
import shutil
from shutil import rmtree
from subprocess import check_call


def resolve_path(rel_path):
    return os.path.abspath(os.path.join(os.path.dirname(__file__), rel_path))


def rmtree_silent(root):
    def remove_readonly_handler(fn, root, excinfo):
        if fn is os.rmdir:
            if os.path.isdir(root):            # if exists
                os.chmod(root, stat.S_IWRITE)  # make writable
                os.rmdir(root)
        elif fn is os.remove:
            if os.path.isfile(root):           # if exists
                os.chmod(root, stat.S_IWRITE)  # make writable
                os.remove(root)

    rmtree(root, onerror=remove_readonly_handler)


def makedirs_silent(root):
    try:
        os.makedirs(root)
    except OSError:                            # mute if exists
        pass


if __name__ == "__main__":
    build_dir = resolve_path("build")
    rmtree_silent(build_dir + '/CmakeFiles/')
    makedirs_silent(build_dir)
    os.chdir(build_dir)

    check_call([
        "cmake",
        os.path.expandvars(
            "-DCMAKE_TOOLCHAIN_FILE=~/Sdk/emsdk/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake"),
        "-DCMAKE_BUILD_TYPE=Release",
        "-DCMAKE_MAKE_PROGRAM=make",
        "-G",
        "Unix Makefiles",
        ".."
    ])

    try:
        check_call(["make"])
        print("Build Finished!")
    except:
        print('Build Fail')

    Pub = input("Copy file?")
    if Pub == 1:
        shutil.move(resolve_path("../Release/MainData.js"), "../../../assets/js/MainData.js")
        shutil.move(resolve_path("../Release/MainData.wasm"), "../../../assets/js/MainData.wasm")
