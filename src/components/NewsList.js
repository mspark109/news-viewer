import { useState, useEffect } from 'react';
import axios from '../../node_modules/axios/index';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '' : `&category=${category}`;

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d4aa776502ec466481e24e5fcaa9c126`,
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //대기 중
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }

  // articles값이 설정되지 않았을 때 (map함수 사용 전 필수)
  if (!articles) {
    return null;
  }

  // articles값이 유효할 때

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
