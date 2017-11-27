Pilih Kamar yang Diinginkan:
<select id="roomChoice">
    <option value=""></option>
    <option value="1">Kamar 1.350.000</option>
    <option value="2">Kamar 1.450.000</option>
    <option value="3">Kamar 1.850.000</option>
    <option value="4">Kamar 1.950.000</option>
</select>
<input type="submit" value="Validate" onclick="return Validate()" />
<script type="text/javascript">
    function Validate() {
        var roomChoice = document.getElementById("roomChoice");
        if (roomChoice.value == "") {
            //If the "Please Select" option is selected display error.
            alert("Mohon pilih jenis kamar");
            return false;
        }
        return true;
    }
</script>