---
layout: page
title: The Gambler's Ruin Problem
description: Introducing Games of Chance
img: /assets/img/GRP/grp.gameplay.png
importance: 1
year: 2020 - 2021
category: Research & Internship
---

The research was completed under the guidance of [Prof.Pallabi Ghosh, Assistant Professor, Department of Statistics, St.Xavier's College, Kolkata](https://www.sxccal.edu/wp-content/uploads/2021/02/Pallabi-Ghosh.pdf) and [Dr.Durba Bhattacharya, HOD, Department of Statistics, St.Xavier's College, Kolkata](https://www.sxccal.edu/wp-content/uploads/2020/01/DurbaBhattacharya.pdf). The topic and the idea to research in the established avenue of Applied Probability was suggested by [Dr.Ayan Chandra, Assistant Professor, Department of Statistics, St.Xavier's College, Kolkata](https://www.sxccal.edu/wp-content/uploads/2020/01/AyanChandra.pdf).

Considering the general problem, which is as follows,

> *Let there be two Gamblers (players) A and B. Player A starts the game with an initial amount of Rs.\\(n_1\\) and Player B starts the game with an initial amount of Rs.\\(n_2\\), such that the total amount of money available in the game is Rs.(\\(n_1 + n_2\\)). Suppose the probability of winning a particular round of the game for A is ’p’ and that for B is ’q = 1-p’. When A wins a round, Rs.1 is received by A from B and when B wins, Rs.1 is received by B from A. The game stops when one of the player goes bankrupt and
the other wins all the money, i.e., Rs.(\\(n_1 + n_2\\)). Then what is the probability of A or B winning the game?*

The solution of the above problem statement has been approached on two different levels, i.e., [Simulating the solution](https://onlinelibrary.wiley.com/doi/10.1002/sim.8086) & [Solving by Difference Equations](https://www.cl.cam.ac.uk/teaching/2003/Probability/prob07.pdf). Mainly the concept of [Monte - Carlo Simulations](https://www4.stat.ncsu.edu/~davidian/st810a/simulation_handout.pdf) have been used for majority of the simulations in the paper. I would like to provide the mathematical and probabilistic expressions as solution to the above problem statement, which is as follows:

> The probability that a gambler will win a game, played under the gambler's ruin setup, when starting initially with Rs.i (say), is 

$$\mathbb{P}_i = \begin{cases}
\frac{1-(\frac{1-p}{p})^i}{1-(\frac{1-p}{p})^(n_1+n_2)}, p \neq 1-p \\
\frac{i}{n_1+n_2}, p = \frac{1}{2}
\end{cases}$$


Another major conundrum under the topic addressed is the *Expected Duration until Ruin*. Major simulations have been done to come up with a solution, along with a concrete mathematical point of view, which includes the usage of [Non-homogenous Linear Difference Equations](https://advancesindifferenceequations.springeropen.com/articles/10.1186/s13662-016-0839-x).

The major concepts and fine ideas to look out for while reading the paper is [Modeling Gambler's Ruin in terms of Random Walks and Markov Chains](https://www.cs.princeton.edu/courses/archive/fall13/cos521/lecnotes/lec12.pdf), along with the application of [Higher Order Transitional Matrices](https://en.wikipedia.org/wiki/Transition_matrix) for visualizing the convergence of long-run probabilities of winning and losing a game, that is being played under the gambler's ruin setup.

In addition to the classic approach of solving the most celebrated Gambler's Ruin Problem, the paper also lists down a wide array of applications to the problem on an inter-discplinary level. 

An [R pacakge: gamblers.ruin.gameplay](https://cran.r-project.org/web/packages/gamblers.ruin.gameplay/index.html) has been developed, along with [An interactive web application: Gambler's Ruin Simulator](https://roysomjitsr.shinyapps.io/grp_simulator/). Feel free to check those out along with the [paper](https://somjitroysr.netlify.app/media/Somjit%20Roy_402_HSTDS6043D.pdf).
