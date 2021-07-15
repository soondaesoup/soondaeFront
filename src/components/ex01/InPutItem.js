import React from 'react';
import Grid from "@material-ui/core/Grid";
import UpLoadButton from "./UpLoadButton";
import InputTitle from "./InputTitle";
import InPutText from "./InPutText";
import Typography from "@material-ui/core/Typography";

const GridTest = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>상품등록</h1>
                    <hr/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <h1>상품사진</h1>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <UpLoadButton></UpLoadButton>
                </Grid>
                <Grid item xs={12} sm={12}>
               <Typography>
                   * 상품 이미지는 640x640에 최적화 되어 있습니다.
                   - 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
                   - 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
                   - 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
                   - 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
                   최대 지원 사이즈인 640 X 640 으로 리사이즈 해서 올려주세요.(개당 이미지 최대 10M)
               </Typography>
                </Grid>
                <Grid item xs={3} md={3}>
                    <h1>제목</h1>
                </Grid>
            <Grid item xs={9} md={9}>
                    <InputTitle></InputTitle>
            </Grid>

                <Grid item xs={12} md={12}>
                    <h1>내용</h1>
                </Grid>

                <Grid item xs={12}>
                  <InPutText></InPutText>
                </Grid>
                <Grid item xs={3} md={3}>
                    <h1>가격</h1>
                </Grid>
                <Grid item xs={9} md={9}>
                    <InputTitle></InputTitle>
                </Grid>

            </Grid>
        </div>
    );
};

export default GridTest;