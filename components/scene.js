AFRAME.registerComponent('js-scene', {

    /* Code within this function will be called when <a-scene> is ready and loaded */
    init: function() {

        /* Change height of dirt box */
        var box = document.querySelector('#box-dirt');
        box.setAttribute('geometry', {height: 4});

        /* Change color of dirt box using event handling*/
        box.addEventListener('foo', function() {
            box.setAttribute('color', '#00b0ba');
        });
        box.emit('foo');

        /* Add 50 boxes with random positions into scene*/
        var scene = document.querySelector('a-scene');
        for (i = 0; i < 50; i++) {
            var el = document.createElement('a-box');
            el.setAttribute('scale', {x: .5, y: .5, z: .5});
            el.setAttribute('position', {x: Math.random(), y: Math.random()+3.5, z: Math.random()-5});
            scene.appendChild(el);
        }
    }
});