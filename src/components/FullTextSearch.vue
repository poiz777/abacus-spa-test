<template>
    <div class="col-md-12 no-lr-pad">

        <div class="pz-card-outer col-md-6">
            <aside class="pz-card-wrapper">
                <div class="pz-card-inner pz-emp-slot">
                    <input type="search" class="pz-ft-search form-control" v-on:keyup="performFullTextSearch" id="pz-ft-search" placeholder="Volltextsuche" />
                    <span class="fa fa-search pz-search-icon"></span>
                </div>
            </aside>
        </div>
        <div class="pz-card-outer col-md-6">
            <div class="col-md-12 no-lr-pad">
                <div class="col-md-7 no-lr-pad">
                    <aside class="pz-person-tag-wrapper">
                        <span class="pz-person-tag">Ich</span>
                        <span class="pz-person-tag">DU</span>
                        <span class="pz-person-tag">Alle</span>
                    </aside>
                </div>
                <div class="col-md-5 no-lr-pad">
                    <aside class="pz-extra-trigger-wrapper">
                        <div class="fa fa-th-large pull-right"></div>
                        <div class="pull-right pz-divider">&nbsp;&nbsp;|&nbsp;</div>
                        <div class="fa fa-align-justify pull-right"></div>
                    </aside>
                </div>
            </div>
        </div>

    </div>
</template>

  <script>
      import sMeths                     from "@/Services/SharedMethods";
      import ajaxFetch                  from '@/Services/JQAjax';

      export default {
          name: "FullTextSearch",
          props: [],
          components: {
          },

          data: function(){
            return {
            };
          },

          mounted: function(){
          },

          created: function(){
          },

          methods : {
              ...sMeths,
              ...{
                performFullTextSearch: function(event){
                    const $$            = ajaxFetch.$;
                    const searchField   = $$(event.target);
                    const keyword       = searchField.val();
                    const itemRows      = $$(".pz-card-wrapper").
                                            not(searchField.parentsUntil(".pz-card-wrapper").
                                            parent(".pz-card-wrapper"));

                    itemRows.each(function(){
                        $$(this).hide();
                        const rx = new RegExp(keyword.replace(/([()])/g, '\\$1' ), 'gui');
                        if( rx.test($$(this).children().text()) ){
                            //HIDE OTHERS BUT THESE ONES
                            $$(this).show();
                        }
                    });
                }
              }
          },
      }
  </script>

  <style scoped>
      .pz-card-wrapper{
          /*padding:10px 10px 0 10px;*/
      }
      .pz-card-outer{
          padding:10px;
      }
      .pz-card-inner{
          position:relative;
      }
      .pz-ft-search{
          padding-left:20px;
      }
      .pz-search-icon{
          position:absolute;
          top: 9px;
          left: 5px;
      }
      .pz-extra-trigger-wrapper,
      .pz-person-tag-wrapper{
          margin-top:7px;
      }
      .pz-extra-trigger-wrapper{
          font-size:22px;
      }
      .pz-person-tag{
          padding: 7px 8px;
          background: #ececec;
          border: solid 1px #cacaca;
          border-left:none;
          font-weight:500;
          color:black;
          text-align:center;
          min-width:45px;
      }
      .pz-divider{
          margin-top:-5px;
      }
      .pz-person-tag:first-child{
          border-left:solid 1px #cacaca;
      }
      .fa.fa-align-justify.pull-right {
          color: rebeccapurple;
          cursor: pointer;
      }
      .fa.fa-th-large.pull-right {
          color: #f59797;
          cursor: pointer;
      }

  </style>