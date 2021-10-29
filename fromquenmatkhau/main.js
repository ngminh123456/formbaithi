function gui(){
    var arr = document.getElementsByTagName('input')
    console.log(arr)
    var nhap = arr[0].value;
    var matkhau = arr[1].value;
    if(nhap == ""){
        alert("Mời bạn nhập số điện thoại");
        return;
    }
    if(isNaN(nhap)){
        alert("Số điện thoại không tồn tại!")
        return;
    }
    if(nhap.length < 9)
            {
                alert("Nhập số điện thoại không hợp lệ!")
            }
}