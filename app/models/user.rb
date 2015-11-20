class User < ActiveRecord::Base

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
