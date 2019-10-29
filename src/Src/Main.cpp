#include <iostream>

#include <emscripten.h>
#include <emscripten/val.h>
#include <emscripten/bind.h>

using namespace std;
using namespace emscripten;

string OAQ(int result)
{
    if (result <= 94)
    {
        return "非述情障碍";
    }
    else if (result > 94 && result <= 112)
    {
        return "可能有述情障碍";
    }
    else if (result > 112)
    {
        return "述情障碍";
    }
    else
    {
        return ("请完成量表。");
    }
}

string AQ_C(int result)
{
	if (result <= 21)
	{
		return ("孩子非孤独症谱系");
	}
	else if (result > 21 && result <= 25)
	{
		return ("孩子有一些孤独症谱系的特质");
	}
	else if (result > 25 && result <= 31)
	{
		return ("孩子可能有高功能孤独症谱系障碍");
	}
	else if (result > 31)
	{
		return ("孩子非常可能有高功能孤独症谱系障碍");
	}
	else
	{
		return ("请完成量表。");
	}
}

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
		return ("请完成量表。");
	}
}

//-----------------------------------------------------------------------------
// The JavaScript API for C++
//-----------------------------------------------------------------------------
EMSCRIPTEN_BINDINGS(QSA)
{
    emscripten::function("OAQ", &OAQ);
    emscripten::function("AQ_C", &AQ_C);
	  emscripten::function("AQ_A", &AQ_A);
}
