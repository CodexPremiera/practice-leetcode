#ifndef LEETCODE_CPP_MOST_PROFIT_ASSIGNING_WORK_H
#define LEETCODE_CPP_MOST_PROFIT_ASSIGNING_WORK_H

#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class most_profit_assigning_work {
public:
    virtual int maxProfitAssignment(std::vector<int>& difficulty, std::vector<int>& profit, std::vector<int>& worker) = 0;
};


#endif //LEETCODE_CPP_MOST_PROFIT_ASSIGNING_WORK_H
