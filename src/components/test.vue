<template>
	<div>
	  <div class="time ve-time-right" @click="openPicker">
    		<label>交付时间:</label>
            <span>{{ date }}</span>
    	</div>
        <mt-datetime-picker
			ref="picker" 
			type="date"
			year-format="{value} 年"
			month-format="{value} 月"
			date-format="{value} 日"
      :startDate="startDate"
			@confirm="handleConfirm" 
			v-model="date">
		</mt-datetime-picker>
    </div>
</template>

<script>
	  import { DatetimePicker,Toast,Popup,Picker  } from 'mint-ui';
	  export default {
	      name: 'test',
	      data() {
	      	return {
	      		date:'',
	      		startDate: new Date()
	      	}
	      },
	      watch: {
            date: function(e){
                this.date = this.fmtDate(e)
            }        
            

        },
	      methods: {
          fmtDate(obj){
                var date =  new Date(obj);
                var y = 1900+date.getYear();
                var m = "0"+(date.getMonth()+1);
                var d = "0"+date.getDate();
                return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
            },
			openPicker() {
				this.$refs.picker.open();
			},
			handleConfirm (e) {
                this.date = this.fmtDate(e)
			},
        }
	  }
</script>

<style>
	
</style>