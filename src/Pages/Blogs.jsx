import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.jpeg';
import { supabase } from '../supabaseClient'; // supabaseClient.js dosyasını dahil ediyoruz

function Blogs() {
  const [blogs, setBlogs] = useState([]); // Blogları tutacak state
  const [searchTerm, setSearchTerm] = useState(''); // Arama motoru için state
  const [likedBlogs, setLikedBlogs] = useState([]); // Beğenilen blogları tutacak state

  // Beğeni sayısını k ve m formatına dönüştüren fonksiyon
  const formatLikes = (likes) => {
    if (likes >= 1000 && likes < 1000000) {
      return (likes / 1000).toFixed(1) + 'k'; // 1000'den fazla, 1k formatında göster
    } else if (likes >= 1000000) {
      return (likes / 1000000).toFixed(1) + 'm'; // 1 milyon veya üzeriyse 1m formatında göster
    }
    return likes; // 1000'den azsa olduğu gibi göster
  };

  // Supabase'den blogları çekme
  const fetchBlogs = async () => {
    let { data: blogs, error } = await supabase
      .from('blogs') // blogs tablosundan verileri çekiyoruz
      .select('*')
      .ilike('title', `%${searchTerm}%`); // Başlığa göre arama yapıyoruz

    if (error) {
      console.error('Error fetching blogs:', error);
    } else {
      setBlogs(blogs);
    }
  };

  // Beğeni ekleme veya çıkarma fonksiyonu
  const handleLike = async (blogId, currentLikes) => {
    if (!likedBlogs.includes(blogId)) { // Eğer kullanıcı blogu daha önce beğenmediyse
      const { data, error } = await supabase
        .from('blogs')
        .update({ likes: currentLikes + 1 }) // Beğeni sayısını 1 artırıyoruz
        .eq('id', blogId); // ID'ye göre doğru blogu güncelliyoruz

      if (error) {
        console.error('Error updating likes:', error);
      } else {
        setLikedBlogs([...likedBlogs, blogId]); // Beğenilen blogu listeye ekliyoruz
        fetchBlogs(); // Blogları yeniden yükleyip beğeni sayısını güncelliyoruz
      }
    } else { // Eğer kullanıcı blogu daha önce beğenmişse
      const { data, error } = await supabase
        .from('blogs')
        .update({ likes: currentLikes - 1 }) // Beğeni sayısını 1 azaltıyoruz
        .eq('id', blogId);

      if (error) {
        console.error('Error removing like:', error);
      } else {
        setLikedBlogs(likedBlogs.filter(id => id !== blogId)); // Blogu beğenilenlerden çıkarıyoruz
        fetchBlogs(); // Blogları yeniden yükleyip beğeni sayısını güncelliyoruz
      }
    }
  };

  // Sayfa yüklendiğinde ve arama terimi değiştiğinde blogları çekiyoruz
  useEffect(() => {
    fetchBlogs();
  }, [searchTerm]);

  return (
    <div>
      <h2 className='h2'>Bloglar</h2>
      {/* Arama motoru */}
      <input
        className='search'
        type="text"
        placeholder="Aramak istediğiniz blogu yazın... 🤔"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Kullanıcı girdisini alıyoruz
      />

      {/* Blogları listeleme */}
      <div className='blogs'>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className='blog' key={blog.id}>
              <small>{blog.created_at}</small>  
              <h3>{blog.title}</h3>
              <div className="blog-content">
                <p>{blog.content}</p>
              </div>
              <div className='profile'>
                <img src={Logo} alt="" />
                <div className="stars">
                  <p>ilkerDeveloper</p>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className='fa-solid fa-star'></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <div className="likes">
                <button
                  className='like-button'
                  onClick={() => handleLike(blog.id, blog.likes)} // Beğeni ekleme/çıkarma
                >
                  <i              style={{
                    cursor: 'pointer',
                    color: likedBlogs.includes(blog.id) ? 'red' : 'gray' // Beğenildiyse kırmızı, değilse gri
                  }} className='fa-solid fa-heart'></i>
                </button>
                <span>{formatLikes(blog.likes)}</span> {/* Beğeni sayısını formatlayarak göster */}
                </div>
              </div>
            </div>
          ))
        ) : (
          // Arama sonucunda hiç blog yoksa
          <p className='no-blogs'>
            😞
            <br /> Aramanıza uygun blog bulunamadı.
          </p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
