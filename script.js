const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        // different ways to change this to a number 
        // one way is adding a + another way is parseInt.
        const target = parseInt(counter.getAttribute('data-target'))
        // getting the data target which is an attribute of 
        // the div class of counter.
        // console.log(typeof target, target)
        const c = +counter.innerText
        // created a variable to get the innerText which 
        // we setted earlier to 0

        const increment = target / 200
        // getting increment by dividing the target by 200

        // console.log(increment)

        if(c < target) {
            // if the counter is less than the data-target 
            // attribute then i want to INCREMENT THE counter.
            counter.innerText = `${Math.ceil(c + increment)}`

            // I DO NOT WANT IT TO STOP ON THE FIRST INCREMENT I WANT IT TO KEEP GOING
            // UNTIL IT REACHES THE TARGET
            // I NEED TO KEEP CALLING THE UPDATECOUNTER() FUNCTION
            setTimeout(updateCounter, 1) 
            // i am waiting 1 millisecond before it runs.

            // and now it increments by how much we are dividing 
            // by in this case by 200.
        }
        else {
            counter.innerText = target
            // i do not want going above the target numbers that i setted in the HTML.
        }
    }

    updateCounter()
    // calling the function this will call it once
})