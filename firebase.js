console.log('firebase file');

// firebase 설정 객체 : 내 firebase에 대한 정보
const firebaseConfig = {
    apiKey: "AIzaSyBTkDZw-xpr76aKJSWbuSrJ1bhikJBDkyE",
    authDomain: "fir-test-7f982.firebaseapp.com",
    databaseURL: "https://fir-test-7f982-default-rtdb.firebaseio.com",
    projectId: "fir-test-7f982",
    storageBucket: "fir-test-7f982.appspot.com",
    messagingSenderId: "214100114094",
    appId: "1:214100114094:web:4169f84acdf756c3f3cb3f"
};

// firebase 앱 초기화
const app = firebase.initializeApp(firebaseConfig);

// firebase 의 실시간 데이터베이스
const database = firebase.database()


//  firebase에 데이터 쓰기
const writeUserData = (userId, name, email) => {
    firebase.database().ref('users/' + userId).set({
        name: name,
        email: email
    })

}

// firebase에 있는 데이터 읽기
const readUserData = (userId)=>{
    const userRef=firebase.database().ref('users/') 
    // 'users/' 라는 경로의 참조를 가져옴
    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data);
    })
}

/*Mission!
1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
2. 사용자가 input 에 입력한 세개의 데이터를 각각 console창에 찍어보기
3. 02. JS 실전 폴더 -> ex04 참고
*/
let addUserBtn = document.getElementById("addUserBtn")
let frm = document.frm.elements

addUserBtn.addEventListener('click', () => {
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);
    writeUserData(frm[0].value, frm[2].value, frm[1].value)
})

let getUserBtn = document.getElementById('getUserBtn')
getUserBtn.addEventListener('click', ()=>{
    console.log('유저가져오기 ck');
    readUserData('skska')
})