let homeView = {
    show: () => {
        $('#content').empty();
        $('#content').append(`
            <div class="button-container">
                <button class="button-home" id="home" type="button"><h3>Home</h3></button>
                <button class="button-videos" id="videos" type="button"><h3>Let's see some surf & skate videos</h3></button>
                <button class="button-cube" id="cube" type="button"><h3>Let's see a nice cube!</h3></button>
                <button class="button-random" id="random" type="button"><h3>Feeling lucky? See a random video!</h3></button>
            </div>
            <div<div class="container">
            <img id="img1" src="resources/header_resized.png" alt="img1"> 
            <img id="img1" src="resources/img2.jpeg" alt="img1">
            </div>
        </div>`);
    }
}

export default homeView;
