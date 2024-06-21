cmake_minimum_required(VERSION 3.28)
project(LeetCode_Cpp)

set(CMAKE_CXX_STANDARD 23)

add_executable(LeetCode_Cpp main.cpp
        problems/patching_arrays/patching_arrays.cpp
        problems/patching_arrays/patching_arrays.h
        problems/sum_of_square_numbers/sum_of_square_numbers.cpp
        problems/sum_of_square_numbers/sum_of_square_numbers.h
        problems/zig_zag_conversion/zig_zag_conversion.cpp
        problems/zig_zag_conversion/zig_zag_conversion.h
        problems/most_profit_assigning_work/most_profit_assigning_work.cpp
        problems/most_profit_assigning_work/most_profit_assigning_work.h
        problems/min_days_to_make_bouquets/min_days_to_make_bouquets.cpp
        problems/min_days_to_make_bouquets/min_days_to_make_bouquets.h)
