function move() {
  var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}

      var totalFiles, neededFiles, percent,status,dfile,sp1,a;
    
    function SetFilesTotal( total ) {
        totalFiles = total;
    }
    function SetFilesNeeded( needed ) {
         neededFiles = needed;
            var filesRemaining = Math.max(0, totalFiles - neededFiles),
                sp = (totalFiles > 0) ?
                    (filesRemaining / totalFiles) : 1;
                        sp = Math.round(sp * 100);

         sp1 = sp + "%"

         document.getElementById("bar").style.width=sp1;
        
    }

    function SetStatusChanged( status )
    {
        var status=status;
        if (status == 'Sending client info...') {
             document.getElementById("bar").style.width='100%';
             document.getElementById("status").innerHTML='Отправка данных серверу';
        }

        if(status == 'Workshop Complete'){
            document.getElementById("status").innerHTML='Выполнена загрузка мастерской';
        }

        

    }
    function DownloadingFile( fileName )
    {
        var dfile=fileName;
        document.getElementById("status").innerHTML='Скачиваем файл '+dfile;
    }
