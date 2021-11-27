---
layout: page
permalink: /software/
title: Software
description: Applications and Contributions - R Software
nav: true
---

This page is dedicated to showcase the applications that I have been able to produce using the open source software : R, and also listing down some of my additions to the network of R packages.

### R Packages

In view of the results obtained during a (research) project or certain applications to theory, a source of documenting those is to wrap them in the form packages in R, for extensive use and implementation at a global level.

* `gamblers.ruin.gameplay`. [[CRAN LINK]](https://cran.r-project.org/web/packages/gamblers.ruin.gameplay/index.html)<br />
Simulates a gambling game under the gambler's ruin setup, after asking for the money you have and the money you want to win, along with your win probability in each round of the game.<br />
The gambler’s ruin problem is a classic example, which illustrates the application of **one-dimensional Random Walks** - a **Stochastic Process**. Simulation of a gambling game under the gambler’s ruin setup concerns to a gambler starting the game with an initial capital, where the probability of winning a particular round is ’p’. If the gambler wins the round, then 1 unit of money is added to the gambler’s existing capital and if the gambler loses a round, then 1 unit of money is deducted from the gambler’s existing capital. The game stops when the gambler reaches his desired amount of money or gets totally bankrupted (ruined), these two points are known as the absorbed states of the
game, or equivalently absorbed states in the one-dimensional random walk. <br />
The function `grp.gameplay()` simulates the above described game, where the simulation runs until one of the absorbed states are reached, i.e., simulating the game until the gambler reaches to 0 money, getting ruined or wins the desired or targeted amount, eventually winning the game. User inputs are accepted, which includes the initial amount of money with which the gambler enters the game, the probability ’p’ of winning each round of the game and lastly the amount of money, which the gambler wishes to earn from this game being played.The function facilitates majorly in visualizing the game trajectory of the gambler, along with the overall probability of the gambler winning the entire game.

* `YatesAlgo.FactorialExp.SR`. [[CRAN LINK]](https://cran.r-project.org/web/packages/YatesAlgo.FactorialExp.SR/index.html)<br />
Determines the sum of squares of the \\(2^{n} - 1\\) factorial effects in a \\(2^{n}\\) factorial experiment using Yates' algorithm. It majorly provides a function to implement **Yates' Algorithm** to determine the factorial effects in a factorial experiment (in this case \\(2^{n}\\)), where the factorial experiment can be carried out using any of the designs including **CRD**, **RBD** or **LSD**.

### R Shiny Apps

The R Software provides a potential platform of developing interactive web applications through `R Shiny`. Following are some instances,

* `Convergence of Sequence:= Epsilon-Delta Definition`. [[APP LINK]](https://roysomjitsr.shinyapps.io/seqconv/)<br />
We are all familiar with the concept of **convergence of a sequence**. This app helps to visualize the \\(\epsilon-\delta\\) definition of the convergence of a sequence {\\(a_n\\)}, by determining the \\(n_{0}\\) which is a natural number and may be a function of \\(\epsilon\\), such that for all n >= \\(n_{0}\\), we have the terms of the sequence to lie within (\\(\alpha\\)-\\(\epsilon\\),\\(\alpha\\)+\\(\epsilon\\)), where \\(\alpha\\) is a real number denoting the limit of the sequence.

* `Gambler's Ruin Simulator`. [[APP LINK]](https://roysomjitsr.shinyapps.io/grp_simulator/)<br />
In extension to the idea portrayed through the R package : `gamblers.ruin.gameplay`, this app demosntrates an interactive session of gameplay using the **Gambler's Ruin** approach.
