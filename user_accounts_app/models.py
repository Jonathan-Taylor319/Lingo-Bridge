from django.db import models
from django.contrib.auth.hashers import make_password, check_password, is_password_usable #this is built in and helps hide the p/w 
#removed the email validator - built in to the emailfield - and there is a unique attribute --- no duplicates

# Create your models here.
class User_Account(models.Model):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=25, unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username

    def save(self, *args,  **kwargs):
        if self.password and is_password_usable(self.password) is False:
            self.password = make_password(self.password)
        super().save(*args, **kwargs)

    # - notes for how this function works ---- this will protect user data changes p/w so hackers have a harder time figuring out raw/pw(user inputed p/w)
    # Purpose: The save() method is overridden to hash the password before it’s saved to the database.
    # self.password: We check if there is a password provided (to avoid hashing None or empty passwords).
    # is_password_usable(self.password): This function checks whether the password is already hashed. If it isn’t (returns False), we proceed to hash it.
    # make_password(self.password): Hashes the password before storing it.
    # super().save(*args, **kwargs): This calls the default save() method from Django after we’ve modified the password, ensuring the rest of the model’s fields are saved normally.

    def check_password(self, raw_password):
        return check_password(raw_password, self.password) # ensures user p/w matches hashed version