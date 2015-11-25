class User < ActiveRecord::Base
  has_attached_file :image, styles: {title: "133x133#", thumb: "50x50#", small: "35x35#" }, default_url: "missing-user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  validates :username, :email, :password_digest, :session_token, :dob, :location, presence: true
  validates :username, :email, :session_token, uniqueness: true
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :check_ins
  has_many(
    :comments,
    foreign_key: :commenter_id,
    class_name: "Comment"
    )
  has_many :check_in_comments, through: :check_ins, source: :comments
  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :liker_id
    )



  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
