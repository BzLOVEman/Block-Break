#pragma strict
//日付け一括管理
public var month : int[];
public var day : int[];
public var range : int;
public var dateSet : boolean;
private var i:int=0; 
function Start () {
	dateSet =true;
	month = new int[100];
	day = new int[100];
}

function Update () {
	if(month[i]==null){
		range=12;
	}else if(day[i]==null){
		if(month[i]==2){
			range=29;
		}else if(month[i]==2||month[i]==4||month[i]==6||month[i]==9||month[i]==11){
			range=30;
		}else if(month[i]==1||month[i]==3||month[i]==5||month[i]==7||month[i]==8||month[i]==10||month[i]==12){
			range=31;
		}
	}
}

function enterNum(tex : int){
	if(month[i]==null){
		month[i]=tex;
	}else if(day[i]==null){
		day[i]=tex;
	}
	if(month[i]!= null && day[i]!=null){
		i++;
	}
	dateSet=true;
}