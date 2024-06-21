#include "min_days_to_make_bouquets.h"

int min_days_to_make_bouquets::minDays(std::vector<int> &bloomDay, int m, int k) {
    // if the total flowers needed is more than available, return -1
    if (m * k > bloomDay.size()) return -1;

    // binary search the range of days to find the minimum days
    int head = *std::min_element(bloomDay.begin(), bloomDay.end());
    int tail = *std::max_element(bloomDay.begin(), bloomDay.end());

    int minDays = -1;

    while (head <= tail) {
        int currDay = (head + tail) / 2;

        if (canMakeBouquet(bloomDay, currDay, k, m)) {
            minDays = currDay;
            tail = currDay - 1; // search the left half
        } else {
            head = currDay + 1; // search the right half
        }
    }

    return minDays;
}

bool min_days_to_make_bouquets::canMakeBouquet(const std::vector<int> &bloomDay, int currDay, int k, int m) {
    int bouquetCount = 0;
    int flowerCount = 0;

    for (int i = 0; i < bloomDay.size(); ++i) {
        // case if the current flower hasn't bloomed
        if (bloomDay[i] > currDay) {
            // end if not enough flowers going on
            if (bloomDay.size() - i + 1 < k * (m - bouquetCount))
                break;

            flowerCount = 0;
            continue;
        }

        // case if the current flower has bloomed
        flowerCount++;

        if (flowerCount == k) {
            if (++bouquetCount == m)
                return true;

            flowerCount = 0;
        }
    }

    return false;
}
