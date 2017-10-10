require 'dotenv/load'
require 'sinatra'
require 'sendgrid-ruby'
include SendGrid

get '/' do
  erb :home
end

get '/contact' do
  erb :contact
end 

post '/contact' do 
	from = Email.new(email: params["email"])
	to = Email.new(email: 'murf2073@gmail.com')
	subject = 'T-Swirl Contact Email (From #{params["name"]})'
	content = Content.new(type: 'text/plain', value: params["issue"])
	mail = Mail.new(from, subject, to, content)
	sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
	response = sg.client.mail._('send').post(request_body: mail.to_json)
	puts response.status_code
	puts response.body
	puts response.headers
	"Thanks for your questions and comments!"
end 

get '/locations' do
  erb :locations
end

get '/gallery' do
  erb :gallery
end

def load_pictures
	end

get '/' do
	"Echo"
end

def load_pictures
	Dir.glob("public/pictures/*")
end

