cmake_minimum_required(VERSION 2.8)
project(QingShanAspie)

add_definitions("-std=c++11")

include_directories(
    ../src/
)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_DEBUG ../Debug)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY_RELEASE ../Release)

add_executable(AQ-A ../Src/AQ-A.cpp)
set_target_properties(AQ-A PROPERTIES LINK_FLAGS "-s WASM=1 -s SAFE_HEAP=1 --js-opts 0 -s ASSERTIONS=2 -s DEMANGLE_SUPPORT=1")