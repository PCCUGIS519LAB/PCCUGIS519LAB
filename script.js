//按下傳送按鈕後執行
function submitHandler(){
    var to = "pccugis519@gmail.com";
//寫死的傳送對象 就是要傳送的信箱，不會顯示在網頁上
    var subject = subText.value;
//讀取ID為 subText物件中的值，我們在上方的input物件已經先設好這個id了
//把user填的資料都塞到 mail body 中
    var body = bodyText.value;
        body += ""+'%0A%0A%0A';
//%0A是換行 換了三行
        body += "From："+nameText.value+'%0A';
        body += "Email："+emailText.value+'%0A';
        body += "Tel："+telText.value;
//傳送的主要程式碼
    mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
    mailTo.click();
//這裡我們藉由將先宣告的a標籤超連結地址改為”mailto:”，瀏覽器就會幫我們打開信箱的預設應用程式，並把所有使用者輸入好的資訊帶進去，接著我們讓a標籤觸發click()，以此觸發這個超連結
}
