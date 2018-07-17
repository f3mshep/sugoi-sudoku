namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end
end

task :start => 'start:development'