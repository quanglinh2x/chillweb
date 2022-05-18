window.addEventListener('DOMContentLoaded', function() {
    

const Volume = function() {
    
    var dotVolume = $$('.dot__volume')
        volume = $$('.volume')
        progress = $$('.progress--item')
        inputVolume = $$('.input__volume')
        range = $$('.range')
    volumes =[];
    let inputVolumes = Array.from(inputVolume)
    for(i=0;i<volume.length;i++) {
        volumes.push(volume[i]);
    }
    
    volumes.map(function(data,index) {
        
        inputVolumes[index].oninput = function (e) {
            
            
            paddingVolume = parseInt(getComputedStyle(data,null).paddingLeft);
            valueVolume = parseInt(this.value);
            addVolume = valueVolume + paddingVolume;
            dotVolume[index].style.left= addVolume.toString() +"px";
            progress[index].style.left =dotVolume[index].style.left;
            range[index].style.width = this.value+'%';
            progress[index].textContent = this.value;
        
    
        }
        inputVolumes[index].click(function(e) {
            e.stopPropagation();
         });
        
    })
}
Volume()
//  down up volume traffic
let audioTraffic = $('#city-traffic')

const volumeTraffic= $('#volume-traffic')
audioTraffic.volume=0;
volumeTraffic.addEventListener('input',function(e) {
    
    audioTraffic.volume= e.currentTarget.value/100
    
})
//  down up volume keyboard
let audioKeyboard = $('#city-keyboard')

const volumeKeyboard= $('#volume-keyboard')
audioKeyboard.volume=0;
volumeKeyboard.addEventListener('input',function(e) {
    
    audioKeyboard.volume= e.currentTarget.value/100
    
})
//  down up volume keyboard
let audioRain = $('#city-rain')

const volumeRain= $('#volume-rain')
audioRain.volume=0;
volumeRain.addEventListener('input',function(e) {
    
    audioRain.volume= e.currentTarget.value/100
    
})
})
