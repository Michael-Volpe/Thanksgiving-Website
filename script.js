window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});

document.getElementById('askButton').addEventListener('click', function() {
    var thanksgiving = Math.floor(Math.random() * 8);
    var response = '';
    
    switch (thanksgiving) {
        case 7: response = 'The first Thanksgiving was celebrated in 1621 by the Pilgrims and the Wampanoag people.'; break;
        case 6: response = 'The first Thanksgiving feast lasted for three days.'; break;
        case 5: response = 'Abraham Lincoln declared Thanksgiving a national holiday in 1863.'; break;
        case 4: response = 'The average number of calories consumed on Thanksgiving Day is around 4,500.'; break;
        case 3: response = 'Turkeys can run up to 20 miles per hour.'; break;
        case 2: response = 'The tradition of the Macy\'s Thanksgiving Day Parade started in 1924.'; break;
        case 1: response = 'Benjamin Franklin wanted the turkey to be the national bird of the United States.'; break;
        case 0: response = 'Thanksgiving Day football games have been a tradition since 1876.'; break;
        default: response = 'Invalid number'; 
    }
    
    
    output.innerText = `Fun Fact: ${response}`;
    });
