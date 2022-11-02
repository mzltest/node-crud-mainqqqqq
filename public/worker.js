self.onmessage = ev => {
    filehashes=ev.data[0]
    filebuf=ev.data[1]
    filechunks=ev.data[2]
        for(j=0;j<filehashes.length;j++){
                var newu8 = filechunks.get(filehashes[j])
                var oldu8 = filebuf
                
                filebuf = new Uint8Array(filebuf.length + newu8.length)
                filebuf.set(oldu8)
                filebuf.set(newu8, oldu8.length)
           
                
        }
        filechunks=undefined
        var saveblob=new Blob([filebuf])
        filebuf=undefined
        postMessage(saveblob);
    }