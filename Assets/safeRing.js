#pragma strict

private var ball : GameObject;

function Start () {
	ball = GameObject.FindWithTag("ball");		//ゲームオブジェクトPlayerを見つけてPlayerに格納

}

function Update () {
	transform.position.y = ball.transform.position.y;
}