#pragma strict

private var ball : GameObject;

function Start () {
	ball = GameObject.FindWithTag("ball");		//ゲームオブジェクトPlayerを見つけてPlayerに格納

}

function Update () {
//	transform.position = ball.transform.position;
	transform.position.x = ball.transform.position.x;
	transform.position.y = ball.transform.position.y;
//	transform.position.z = ball.transform.position.z;
}