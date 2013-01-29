<script type="text/javascript">
    var currentValue = 100;
    var targetValue = 1500;
// Should use var to name variables currentValue and targetValue 
    function count()
    {
        if (currentValue > targetValue) 
        {
        currentValue -= 1
        } 
        
        else if (currentValue < targetValue) 
        {
            currentValue += 1
        } 
        
        document.getElementById('myDiv').innerHTML = 'Total wordcount:'+ currentValue.toString();
        changeTime = 20;
        
        if (Math.abs(currentValue - targetValue) < 980) 
        {
            changeTime = 1000 - Math.abs(currentValue - targetValue);
        }
        setTimeout(count,changeTime/2);
    }
count()
// Using the almond style for brackets could make the code cleaner
</script> 