---
layout: page
title: The Gambler's Ruin Problem
description: Introducing Games of Chance
img: /assets/img/GRP/GRP_1.jpg
importance: 1
year: 2020 - 2021
category: Research Papers
---

The research was completed under the guidance of [Prof.Pallabi Ghosh, Assistant Professor, Department of Statistics, St.Xavier's College, Kolkata]() and [Dr.Durba Bhattacharya, HOD, Department of Statistics, St.Xavier's College, Kolkata](). The topic and the idea to research in the established avenue of Applied Probability was suggested by [Dr.Ayan Chandra, Assistant Professor, Department of Statistics, St.Xavier's College, Kolkata]().

Considering the general problem, which is as follows,

> *Let there be two Gamblers (players) A and B. Player A starts the game with an initial amount of Rs.\\(n_1\\) and Player B starts the game with an initial amount of Rs.\\(n_2\\), such that the total amount of money available in the game is Rs.(\\(n_1 + n_2\\)). Suppose the probability of winning a particular round of the game for A is ’p’ and that for B is ’q = 1-p’. When A wins a round, Rs.1 is received by A from B and when B wins, Rs.1 is received by B from A. The game stops when one of the player goes bankrupt and
the other wins all the money, i.e., Rs.(\\(n_1 + n_2\\)). Then what is the probability of A or B winning the game?*

The solution of the above problem statement has been approached on two different levels, i.e., [Simulating the solution]() & [Solving by Difference Equations]().  

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3">
        <img class="img-fluid rounded z-depth-1" src="https://www.zameen.com/news/wp-content/uploads/2018/08/factory-pollution.jpg" alt="" title=""/>
    </div>
    <div class="col-sm-4 mt-3">
        <img class="img-fluid rounded z-depth-1" src="https://i.pinimg.com/236x/7c/92/82/7c92820e3e3e50838671b8d8c6a059c9--ice-ice-baby-iceberg.jpg" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Factories have been a major source of pollution in recent times. Due to global warming, glacier melts have led to rising sea levels around the world. Forecasts suggest much of the continental seacoasts would be underwater by 2050.
</div>

The modern society has subjected the environment to various kinds of pollution in their constant struggle to increase efficiency by greater technological means. The pace at which the quality of the environment is degrading, environmental scientists expect within the next 200 years, the Earth will become completely uninhabitable for humans to survive.

\\(\frac{1}{2}\\)

In light of the alarming situation impending, we plan to be the flagbearers of the next movement which intends to create a disruption in the current societal atmosphere by using the same technological advancements to help the environment. We have developed a new social media platform which plans to save the environment by incentivizing users to take care of their surroundings.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/ecoeden/ecoeden-1.png' | relative_url }}" height="100" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Visuals of the EcoEden mobile app developed.
</div>


In the first phase of our roll out, we plan to take a look at the problem of garbage pollution which has been haunting us for decades. Our novel incentive-based model has been developed keeping in mind the current problems at hand. By leveraging the power of incentives, users of our app will be psychologically motivated to clean up trash in their area and keep their environment clean.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/ecoeden/ecoeden-2.png' | relative_url }}" height="100" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Example of the reward system in place.
</div>

Location based tracking has ushered in a new era of geo-spatial interaction. Satellite technology has eased navigation in ways never imagined by our previous generations. Together with the recently developed state-of-the-art machine learning techniques, computer-based automation has propelled humanity to great new heights.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/ecoeden/ecoeden-3.png' | relative_url }}" height="100" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Trash collection and peer based verification.
</div>

Our app uses GPS to determine the user’s location and uses it to recommend trash locations nearby. Photos uploaded by users are passed through a custom developed trash detection computer vision model which helps in automating the task of trash detection.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/ecoeden/ecoeden-4.jpg' | relative_url }}" height="100" alt="" title=""/>
    </div>
</div>
<div class="caption">
    Revenue generation methods for EcoEden.
</div>

Using the power of computer automation and social interactions in the digital realm, we hope we can solve today’s problems and gift us and our future generations a better tomorrow.

<hr>

<div id="splide-loader" class="row justify-content-sm-center">
    <div class="col-sm-2 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-0" src="{{ '/assets/img/spinner.gif' | relative_url }}" alt="" title=""/>
    </div>
</div>

<div class="splide" id="splide-master" hidden="true">
	<div class="splide__track">
		<ul id="ecoeden-slides" class="splide__list">			
		</ul>
	</div>
</div>
<div class="caption">
    SIH'20 Hackathon Final Slide Deck
</div>

<script>

    var index = 0
    var slideCount = 21
    var tempImg = new Image()

    const event = new Event('splidesLoaded');

    tempImg.onload = function(){
        appendImage();
    }
    var tryLoadImage = function( index ){
        tempImg.src = '/assets/img/ecoeden/slides/ecoeden-' + index + '.jpg'
    }

    var appendImage = function(){

        var newImage = document.createElement('img')
        newImage.setAttribute('class', 'image-item')
        newImage.setAttribute('height', '400')
        newImage.src = tempImg.src

        var liItem = document.createElement('li')
        liItem.setAttribute('class', 'splide__slide')
        liItem.appendChild(newImage)

        document.getElementById('ecoeden-slides').appendChild(liItem)
        index = index + 1

        if (index < slideCount) {
            tryLoadImage ( index )
        }
        else {
            document.dispatchEvent(event);
        }
    }

    tryLoadImage( index );

</script>
