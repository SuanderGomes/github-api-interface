import React from "react";
import * as S from "./styled";
import RepositoryItem from "../repository-item"

const Repositories = () => {
    return (
        <S.WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel><RepositoryItem name="basecamp-javascript" linkToRepo="https://github.com/SuanderGomes/basecamp-javascript"
                fullName="SuanderGomes/basecamp-javascript"/>
                </S.WrapperTabPanel>
                <S.WrapperTabPanel><RepositoryItem name="desafioDIO-github-primeiro-repositorio" linkToRepo="https://github.com/SuanderGomes/desafioDIO-github-primeiro-repositorio"
                fullName="SuanderGomes/desafioDIO-github-primeiro-repositorio"/></S.WrapperTabPanel>
    </S.WrapperTabs>
    );
};

export default Repositories;