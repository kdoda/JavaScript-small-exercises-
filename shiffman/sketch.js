var stars=[];
var speed;

function setup() {
  
    createCanvas(800, 800);
    for(var i=0;i<400;i++)
        stars[i]= new Star();
}





function draw() {
    
    background(0);
    speed=map(mouseX,0,width,0,50);//se kemi ber akoma translate ne kete pik perndryshe duhet ta kishim ber nga -width/2-width/2
    
    translate(width/2,height/2); // qe te jete si pik reference mesi i canvas normalist merret cepi lart majtas( e bejm sepse e duam te zhduken nga mesi) mendon sikur kjo e reja eshte pika 0.0 zhvendos origjinen!!!
    
    for(var i=0;i<400;i++)
        {
        stars[i].display();
        stars[i].move();
        /*    console.log(stars[i].sx);
            console.log(stars[i].sy); */
      
        }
   
 

}

/*
function mousePressed(){
    console.log(map(-5,0,1,0,width/2)); //funskioni map i perkthen vlerat dhe po te jen negative sikur te jen pozitive dhe u ve minus
                                         gjithashtu kufijt nga 0ne 1 mund te kalohen nuk eshte se jan tamam kufijt qe leviz po per 1 levizje aq te vogel ndryshon aq shum vlera qe kthen map
}
*/

function Star(){
    
    this.x=random(-width,width);
    this.y=random(-height,height);
    this.z=random(width);    // po ta kishim vetem width ben qe heren e par kur te dalin  yjet te jene te gjitha brenda
    this.pz=this.z;
    
    this.move=function(){
        this.z-=speed;   // speed e deklarojme globale per te kontrolluar shpejtesine sipas mouse
        if(this.z<1)
        {
            this.z=random(width);  //po mos ta benim random do na zhdukeshin dhe dilnin ne te njejten koh sepse kan te njejten z fillestare
            this.x=random(-width,width);
            this.y=random(-height,height);
            this.pz=this.z;
        }
    }
    
    this.display=function(){
        fill(255);
        noStroke();
  
        this.sx=map(this.x/this.z,0,1,0,width/2);  //prandaj i marrim kufijt 0-1 se per ndryshime te vogla te z duam qe te ndryshoj shum pozicioni saj
        this.sy=map(this.y/this.z,0,1,0,width/2); //dhe se raporti gjithnje heren e par eshte nga 0-1
        
        this.r=map(this.z,0,width,12,0);  //duke u afruar duke u zmadhuar kur z eshte 0 dmth qe jane ktu afer eshte zmadhuar ne max
        ellipse(this.sx,this.sy,this.r,this.r);
                                                //nqs this.pz=thi.z do ishte ktu sdo dilte fare vize ne ekran
       this.px=map(this.x/this.z,0,1,0,width/2);
        this.py=map(this.y/this.z,0,1,0,width/2);
        
        this.pz=this.z;// krijon nje viz super te vogel sepse this.pz e merr vleren nje cikel  me vones dhe krijon nje distanc shume te vogel sepse llogaritet px dhe py para
        
        stroke(255);
        line(this.px,this.py,this.sx,this.sy);
    }
}
    
    
    
    
    
    