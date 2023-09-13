const RoomDetail = () => {

  return (
  <>
      <body style={{backgroundColor:'beige',height:"100%", display:'flex', justifyContent:'center', padding:'0 400px 0 400px'}}>
        <article style={{backgroundColor:'aqua', height:'100%', width:'100%', margin:'0', padding:'10px', display:'flex', justifyContent:"center", flexDirection:"column", }}>
            <section style={{backgroundColor:"red", display:"flex", justifyContent:"center"}}>
                <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2020_12_20_444%2F72049b08-42cf-11eb-9ca7-48df379ccacc_01.jpg&type=ofullfill340_600_png" alt="이미지"/>
            </section>
            <section style={{backgroundColor:"green", display:"flex", justifyContent:"center"}}>
                <div>방 이름 및 설명 : Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</div>
            </section>
            <section style={{backgroundColor:"blue", display:"flex", justifyContent:"center"}}>
                <div>예약 시스템 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</div>
            </section>
        </article>
      </body>

  </>
  );
}

export default RoomDetail;