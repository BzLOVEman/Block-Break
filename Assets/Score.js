#pragma strict

static public var score =0;
private var endOfGame:int=27;

function Start () {

}

function Update () {
    if(endOfGame <= score){
        Application.LoadLevel("Result");
    }

}