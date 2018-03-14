#pragma strict
import UnityEngine.UI;

var scoreText:Text;


function Start () {
    scoreText = GameObject.Find("Canvas/Text").GetComponent("Text");
    //Debug.Log(scoreText.text);
}

function Update () {
    scoreText.text="Score:"+ (Score.score*100/27)+"%"+" "+Score.score+"/27";
}