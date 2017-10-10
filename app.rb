require 'sinatra'
require 'sendgrid-ruby'

get '/' do
  erb :home
end
get '/contact' do
  erb :contact
end  
get '/locations' do
  erb :locations
end
get '/gallery' do
  erb :gallery
end
