CLEAR({broadphase:"BVT", timer:false, timestep:1/60, iteration:2, G:-10});

function initDemo()
{
    NAME("Vehicule Garage", "use arrow key to control car<br>select your car with number 0-9");

    ADD({type:"plane"});
    ADD({type:"ground", size:[30,1,20], pos:[0,1,0], rot:[9,0,0], mass:0});
    ADD({ type:"boxbasic", size:[30,2,1], pos:[0,1,16] });

    ADD({type:"box", size:[1,1,1], pos:[9, 10, 0], mass:1, noSleep:true});
    ADD({type:"box", size:[1,1,1], pos:[-8, 10, 0], mass:1, noSleep:true});

    var Setting = {
        engine:600, stiffness: 40, relaxation: 2.3, compression: 2.4, 
        travel: 500, force: 6000, frictionSlip: 0.94, reslength: 0.05, roll: 0.5 
    }

    var max = 10; // maximum 20
    var px, t, n=2;

    for (var i=0; i!==max; ++i ){
        t = Math.floor(Math.random()*n)+1;
    	px=-11+(i*2.5);
        switch(t){
            case 1: CAR({type:'c1gt',   pos:[px, 10, -7], mass:900,  setting:Setting }); break;
            case 2: CAR({type:'vision', pos:[px, 10, -7], mass:1490, setting:Setting }); break;
            case 3: 
                CAR({
                    type:'basic',  pos:[px, 10, -7], mass:1000, setting:Setting, 
                    size:[2,0.5,5], wPos:[1,0,2], wRadius:0.4, massCenter:[0,0.05,0] 
                }); 
            break;
        }
    }
}