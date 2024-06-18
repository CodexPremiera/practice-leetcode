cmake_minimum_required(VERSION 3.28)
project(LeetCode_Cpp)

set(CMAKE_CXX_STANDARD 23)

add_executable(LeetCode_Cpp main.cpp
        problems/patching_arrays/patching_arrays.cpp
        problems/patching_arrays/patching_arrays.h
        problems/sum_of_square_numbers/sum_of_square_numbers.cpp
        problems/sum_of_square_numbers/sum_of_square_numbers.h)
