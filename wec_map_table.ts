plugin.tx_wecmap_pi3 {
zoomLevel = 4
tables {
    10 {
      table = tt_address

      title {
        title = TEXT
        title.field = country
        title.wrap = <div class="infotitle">|</div>
      }
      description = COA
      description {
        10 = COA
        10 {
          10 = TEXT
          10.field = company
          10.wrap = <h1 class="bubble-h1">|</h1><br />
          
          12 = TEXT
          12.field = title
          12.wrap = <p class="bubble-p"><b>Contact:</b> | &nbsp;
          13 = TEXT
          13.field = first_name
          13.wrap = | &nbsp;
          14 = TEXT
          14.field = last_name
          14.wrap = | </p>        
          
          20 = TEXT
          20.field = address
          20.wrap = <p class="bubble-p">| <br />
          21 = TEXT
          21.field = zip
          21.wrap = | &nbsp;
          22 = TEXT
          22.field = city
          22.wrap = | </p>
         
          30 = TEXT
          30.field = phone
          30.wrap = <p class="bubble-p">Tel: &nbsp;| <br />
          31 = TEXT
          31.field = mobile
          31.wrap = Mobile: &nbsp;| <br />
          31.ifEmpty.wrap = - |
          32 = TEXT
          32.field = fax
          32.wrap = Fax: &nbsp;| <br />
          32.ifEmpty.wrap = -|
          33 = TEXT
          33.field = email
          33.wrap = E-Mail: &nbsp;| <br />
          33.typolink.parameter.field = email
          34 = TEXT
          34.field = www
          34.wrap = Web: &nbsp;| </p>
          34.typolink {
             parameter.field = www
             target =
             ATagParams =
          }
         
          #40 = TEXT
          #40.field = description
          #40.wrap = <strong>Beschreibung:</strong><br />|<br />

        }
        10.wrap = <p>|</p>
      }
    }
  }
}