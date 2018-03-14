#pragma strict
function Start () {

}

function Update () {

}

function OnCollisionEnter(collision : Collision){
    Score.score++;
    ball.Speed++;
    //Scoreの中のscore変数を加算
    Destroy(gameObject);
    GetComponent.<Rigidbody>().velocity=GetComponent.<Rigidbody>().velocity.normalized*10;

}