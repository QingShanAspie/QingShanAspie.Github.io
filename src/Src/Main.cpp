#include <iostream>

#include <emscripten.h>
#include <emscripten/val.h>
#include <emscripten/bind.h>

using namespace std;
using namespace emscripten;

string AQ_A(int result)
{
	if (result <= 21)
	{
		return ("非孤独症谱系");
	}
	else if (result > 21 && result <= 25)
	{
		return ("您有一些孤独症谱系的特质");
	}
	else if (result > 25 && result <= 31)
	{
		return ("您可能有高功能孤独症谱系障碍");
	}
	else if (result > 31)
	{
		return ("您非常可能有高功能孤独症谱系障碍");
	}
	else
	{
		return ("请完成量表！！！");
	}
}

//-----------------------------------------------------------------------------
// The JavaScript API for C++
//-----------------------------------------------------------------------------
EMSCRIPTEN_BINDINGS(QSA)
{
	emscripten::function("AQ_A", &AQ_A);
}