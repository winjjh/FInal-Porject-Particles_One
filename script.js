var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(-0.001, 0.01);
  };
  
  Mover.prototype.update = function() {
    this.acceleration = PVector.random2D();
    this.acceleration.mult(random(2));
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.position.add(this.velocity);
  };
  
  Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
  };
  
  Mover.prototype.checkEdges = function() {
  
    if (this.position.x > width) {
      this.position.x = 0;
    } 
    else if (this.position.x < 0) {
      this.position.x = width;
    }
  
    if (this.position.y > height) {
      this.position.y = 0;
    } 
    else if (this.position.y < 0) {
      this.position.y = height;
    }
  };
  
  var mover = new Mover();
  
  var draw = function() {
    background(255, 255, 255);
    
    mover.update();
    mover.checkEdges();
    mover.display(); 
  };