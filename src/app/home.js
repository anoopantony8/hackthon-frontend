import React, {Component} from 'react';
import './home.css';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};
export class Home extends Component {
  render() {
    return (
      <div style={styles.container}>
        <section className="sec">
          <div className="container">
            <div className="col-sm-12">
              <div className="list list-columns-3">
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-08.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">Haniya Truong</h2>
                  <h6 className="info">Project Manager</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> tech</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 101 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-03.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">Norbert Havard</h2>
                  <h6 className="info">Front End Developer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised intext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised intext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 50 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-02.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">Jerrod Lahey</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> Design</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 1000 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-05.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">John Smith</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley ly five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-09.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">Rayhan Camacho</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loremies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-06.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">John Smith</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummysetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-02.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">John Smith</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-03.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">John Smith</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-07.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">John Smith</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
                <div className="list-item">
                  <div className="media">
                    <img src="images/user-05.jpg" className="img-responsive center-block" alt/>
                  </div>
                  <h2 className="title">John Smith</h2>
                  <h6 className="info">software engineer</h6>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in </p>
                  <button className="bttn"><a href title className="comment">Write a Comment</a></button>
                  <div className="tag-comment">
                    <span className="pull-left"><i className="fa fa-tags"/> web</span>
                    <span className="pull-right"><i className="fa fa-comments"/> 100 comments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
