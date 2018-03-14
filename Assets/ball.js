#pragma strict


    static public var Speed =10.0;//速度
function Start(){
    GetComponent.<Rigidbody>().AddForce(
    (transform.right - transform.up - transform.forward) * Speed,
    ForceMode.VelocityChange
    );
}
	
function Update () {
	if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.y) < 3) {
		GetComponent.<Rigidbody>().velocity.y = GetComponent.<Rigidbody>().velocity.y * 3;
	}
	if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.x) < 3) {
		GetComponent.<Rigidbody>().velocity.x = GetComponent.<Rigidbody>().velocity.x * 3;
	}
	if (Mathf.Abs(GetComponent.<Rigidbody>().velocity.z) < 3) {
		GetComponent.<Rigidbody>().velocity.z = GetComponent.<Rigidbody>().velocity.z * 3;
	}
	GetComponent.<Rigidbody>().velocity=GetComponent.<Rigidbody>().velocity.normalized*10;
	if(transform.position.y < -15){
		Application.LoadLevel("Result");
	}
}

function OnCollisionEnter(col : Collision){


}
