import React from 'react';
import Grid from "@material-ui/core/Grid";
import UpLoadButton from "./UpLoadButton";
import Input from "./Input";
import SearchButton from "./SearchButton";
import InPutText from "./InPutText";
import InputButton from "./InputButton";
import Typography from "@material-ui/core/Typography";

const GridTest = () => {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>회원가입</h1>
                    <hr/>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <h2>상품사진</h2>
                </Grid>
                <Grid item xs={6} sm={6}>
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
                <Grid item xs={3} sm={3}>
                    <h2>제목</h2>
                </Grid>
                <Grid item xs={7} sm={7}>
                    <Input></Input>
                </Grid>

                <Grid item xs={3} sm={3}>
                    <h2>내용</h2>
                </Grid>

                <Grid item xs={7} sm={7}>
                    <InPutText></InPutText>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <h2>가격</h2>
                </Grid>
                <Grid item xs={7} sm={7}>
                    <Input></Input>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <h2>거래지역</h2>
                </Grid>
                <Grid item xs={7} sm={7}>
                    <Input></Input>
                </Grid> <Grid item xs={2} sm={2}>
                <SearchButton></SearchButton>
            </Grid>
                <Grid item xs={3} sm={3}>
                </Grid>
                <Grid item xs={7} sm={7}>
                </Grid>
                <Grid item xs={2} sm={2}>
                    <InputButton></InputButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default GridTest;