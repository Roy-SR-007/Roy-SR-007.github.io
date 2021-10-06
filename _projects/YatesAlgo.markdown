---
layout: page
title: YatesAlgo.FactorialExp.SR
description: Determines the sum of squares of the (2^n)-1 factorial effects in a 2^n factorial experiment using Yates' algorithm.
img: /assets/img/Yates/Yates_1.png
importance: 2
year: 2021
category: R Packages
---

This is an R-Package which facilitates the determination of the *Sum of Squares* of the required \\(2^n - 1\\) *Factorial Effects* in a \\(2^n\\) symmetric *Factorial Experiment*. Note that, the Factorial Experiment being conducted can be a *CRD (Completely Randomized Design)*, *RBD (Randomized block Design)* or an *LSD (Latin Square Design)*. To know more about the package visit the package documentation on [Comprehensive R Archive Network](https://cran.r-project.org/package=YatesAlgo.FactorialExp.SR).

### A Brief Description about Yates' Algorithm for a \\(2^n\\) Experiment

Consider **n** factors each at **two** levels. The number of **Factorial Effects** are \\(2^{n} - 1\\).

Yates' provided an algorithm to obtain the **Sum of Squares** of the different factorial effects of a \\(2^{n}\\) experiment in a systematic order.

**Step 1**: Write down the \\(2^n\\) treatment combinations in the [standard order](https://cran.r-project.org/package=TrtCombo.FactorialExp.SR) in the first column.

**Step 2**: In the second column, write down the total of the treatment combinations in their standard order, as noted in column 1.

**Step 3**: In the third column, break the number of treatment combination totals in column 2 into pairs of 2. Each pair consists of two consecutive treatment totals starting from {1}. In the **first half** of the **third column**, write down the **sums** of the consecutive pairs serially. In the **second half** of the **third column**, write down the **difference** of the first member of the pair from its second, serially.

**Step 4**: From the fourth to the (n+2)th column, repeat the process as in Step 3. That is, to fill up a column, divide the preeceding column into pairs. In the first half of the present column, write down the sums of the consecutive pairs of the preceeding column serially. In the second half of the present column, write down the difference of the first member of the pair from its second in the preceeding column serially. The **(n+2)th** column gives the factorial effect totals of the \\(2^n\\) experiment.

### A Toy Example of the Algorithm

Let us consider three factors **A**, **B** & **C**, with two levels each. The higher level of a factor say A(B or C) is denoted by **a(b or c)** and the lower level of that factor is simply represented by the absence of the letter in the corresponding treatment combination.

The standard order of treatment combination is -- 1, a, b, ab, c, ac, bc, abc. Let us denote the treatment totals as {a}, i.e., sum of all the units receiving the treatment combination **a**.

Therefore, the Yates' Algorithm as discussed above will give rise to the following table.

| Col 1 | Col 2 | Col 3        | Col 4                     | Col 5                                                                  | Factorial Effect Totals |
| :---: | :---: | :---:        | :---:                     | :---:                                                                  | :---:                   |
| 1    | {1}    | {1} + {a}    | {1} + {a} + {b} + {ab}    | {1} + {a} + {b} + {ab} + {c} + {ac} + {bc} + {abc}                     | -                       |
| a    | {a}    | {b} + {ab}   | {c} + {ac} + {bc} + {abc} | -{1} + {a} - {b} + {ab} + {ac} - {c} + {abc} - {bc}                    | \\({\hat{A}}\\)         |
| b    | {b}    | {c} + {ac}   | {a} - {1} + {ab} - {b}    | -{1} - {a} + {b} + {ab} - {ac} - {c} + {abc} + {bc}                    | \\({\hat{B}}\\)         |
| ab   | {ab}   | {bc} + {abc} | {ac} - {c} + {abc} - {bc} | {1} - {a} - {b} + {ab} - {ac} + {c} + {abc} - {bc}                     | \\({\hat{AB}}\\)        | 
| c    | {c}    | {a} - {1}    | {b} + {ab} - {1} - {a}    | -{1} - {a} - {b} - {ab} + {ac} + {c} + {abc} + {bc}                    | \\({\hat{C}}\\)         |
| ac   | {ac}   | {ab} - {b}   | {bc} + {abc} - {c} - {ac} | {ac} - {c} + {abc} - {bc} - {a} + {1} - {ab} + {b}                     | \\({\hat{AC}}\\)        |
| bc   | {bc}   | {ac} - {c}   | {ab} - {b} - {a} + {1}    | {bc} + {abc} - {c} - {ac} - {b} - {ab} + {1} + {a}                     | \\({\hat{BC}}\\)        |
| abc  | {abc}  | {c} + {ac}   | {abc} - {bc} - {ac} + {c} | {abc} - {bc} - {ac} + {c} - {ab} + {b} + {a} - {1}                     | \\({\hat{ABC}}\\)       |

In the above table, Column 5 gives us the Factorial Effect Totals, which is required for the calculation of the Sum of Squares of the required \\(2^{n} - 1\\) many Factorial Effects, i.e., in the above \\(2^3\\) experiment, there are \\(2^{3} - 1 = 7\\) Factorial Effects, i.e.,

* Main Effects : **A**, **B** and **C**
* First Order Interactions : **AB**, **AC** and **BC**
* Second Order Interaction : **ABC**

In general, the Sum of Squares of a Factorial Effect in a \\(2^n\\) Factorial Experiment is given by, \\(SS(X) = \frac{{\hat{X}}^2}{r2^n}\\).

