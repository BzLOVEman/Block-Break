#pragma strict
//日付けを取り出し、テクスチャを張る
//入力を送信
private var tex : int;
private var dp : dateProject;

//var ~ : Texture;

function Start () {
	tex=Random.Range(1, 12+1);
	dp=GetComponent("dateProject");
}

function Update () {
	if(dp.dateSet){	
		//月または日の範囲の取得
//		tex = Random.int(1, dp.range+1);/*月または日の範囲*/
		dp.dateSet=false;
	}
	//texからテクスチャ呼び出し
//	renderer.material.mainTexture= ;
}

function OnCollisionEnter(collision : Collision){
	//dateprojectにtexを送信
	dp.enterNum(tex);
}