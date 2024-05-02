function get_result(){
    output_div = document.getElementById('output_div');
    output_div.style.display = 'none';
    good_output = document.getElementById('good_output');
    bad_output = document.getElementById('bad_output');
    submit_btn = document.getElementById('submit_btn');
    btn_spinner = document.getElementById('btn_spinner');
    btn_text = document.getElementById('btn_text');

    good_output.style.display = 'none';
    bad_output.style.display = 'none';

    submit_btn.disabled = true;
    btn_spinner.style.display = 'block';
    btn_text.style.display = 'none';

    url_data = document.getElementById('url_form').value;
      $.ajax({
          url: '/process-url',
          type: 'POST',
          data : {
            'url': url_data,
          },
          success: function(data){
            response = data['response']
            btn_spinner.style.display = 'none';
            btn_text.style.display = 'block';
            submit_btn.disabled = false;
            if (response == 'success'){
                output = data['content']
                output_div.style.display = 'block';
                if(output == "good"){
                    good_output.style.display = 'block';
                }
                else{
                    bad_output.style.display = 'block';
                }
            }
            else{
              data = data['content']
              alert(data);
            }
          },
  
      });
  }
   