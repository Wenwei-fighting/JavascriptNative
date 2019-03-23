let margindata = 0,
    num = 1;

var vm = new Vue({
    el:"#Box",
    data:{
        state: false,
        styleObject:{ marginLeft : "0px" },
        activeClass: "clickon",
        errorClass: "function_btn",
        list:[{
            address: "img/1.jpg",
            view_number: 1,
            // content_text: "图片一"
        },{
            address: "img/2.jpg",
            view_number: 2,
            // content_text: "图片二"
        },{
            address: "img/3.jpg",
            view_number: 3,
            // content_text: "图片三"
        },{
            address: "img/4.jpg",
            view_number: 4,
            // content_text: "图片四"
        },{
            address: "img/5.jpg",
            view_number: 5,
            // content_text: "图片五"
        }],
        top_text: '1/5',
        bottom_text: '图片一'
    },
    methods:{
        circulation_mode:function () {
            this.activeClass = 'function_btn';
            this.errorClass  = 'clickon';
            this.state = true;
        },
        once_mode:function () {
            this.activeClass = 'clickon';
            this.errorClass  = 'function_btn';
            this.state = false;
        },
        left_switch:function () {
            if (this.state) {
                num--;
                if (num == 0) {
                    num = 5;
                    margindata = -4000;
                }
                margindata += 800;
                Vue.set(this.styleObject, "marginLeft", `${margindata}px`);
                this.textchange(num);
            }else {
                if (num > 1) {
                    num--;
                    margindata += 800;
                    Vue.set(this.styleObject, "marginLeft", `${margindata}px`);
                    this.textchange(num);
                }
            }
        },
        right_switch:function () {
            if (this.state){
                num++;
                if (num == 6){
                    num = 1;
                    margindata = 800;
                }
                margindata -= 800;
                Vue.set(this.styleObject, "marginLeft", `${margindata}px`);
                this.textchange(num);
            }else {
                if (num < 5) {
                    num++;
                    margindata -= 800;
                    Vue.set(this.styleObject, "marginLeft", `${margindata}px`);
                    this.textchange(num);
                }
            }
        },
        textchange(view_number) {
            this.top_text = `${view_number}/5`;
            switch (view_number) {
                case 1 :
                    this.bottom_text = "图片一";break;
                case 2 :
                    this.bottom_text = "图片二";break;
                case 3 :
                    this.bottom_text = "图片三";break;
                case 4 :
                    this.bottom_text = "图片四";break;
                case 5 :
                    this.bottom_text = "图片五";break;
            }
        }
    }
});