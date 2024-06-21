#ifndef LEETCODE_CPP_MIN_DAYS_TO_MAKE_BOUQUETS_H
#define LEETCODE_CPP_MIN_DAYS_TO_MAKE_BOUQUETS_H

#include <vector>
#include <iostream>
#include <algorithm>

class min_days_to_make_bouquets {
private:
    virtual bool canMakeBouquet(const std::vector<int>& bloomDay, int currDay, int k, int m) = 0;

public:
    virtual int minDays(std::vector<int>& bloomDay, int m, int k) = 0;
};


#endif //LEETCODE_CPP_MIN_DAYS_TO_MAKE_BOUQUETS_H
